"use client";
import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";

const initialBlogFormData = {
  title: "",
  description: "",
};
const BlogOverview = ({ blogList }) => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [currentEditedBlogId, setCurrentEditedBlogId] = useState(null);

  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);

  const handelSaveBlogData = async () => {
    setLoading(true);
    try {
      const apiResponse =
        currentEditedBlogId !== null
          ? await fetch(`/api/update-blog?id=${currentEditedBlogId}`, {
              method: "PUT",
              body: JSON.stringify(blogFormData),
            })
          : await fetch("/api/add-blog", {
              method: "POST",
              body: JSON.stringify(blogFormData),
            });
      const result = await apiResponse.json();
      if (result?.success) {
        setBlogFormData(initialBlogFormData);
        setOpenBlogDialog(false);
        setCurrentEditedBlogId(null);
        setLoading(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  };

  const handleDeleteBlogByID = async (getCurrentID) => {
    try {
      const apiResponse = await fetch(`/api/delete-blog?id=${getCurrentID}`, {
        method: "DELETE",
      });
      const result = await apiResponse.json();
      if (result?.success) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleEditBlogByID = async (getCurrentBlog) => {
    setCurrentEditedBlogId(getCurrentBlog?._id);
    setOpenBlogDialog(true);
    setBlogFormData({
      title: getCurrentBlog?.title,
      description: getCurrentBlog?.description,
    });
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handelSaveBlogData={handelSaveBlogData}
        currentEditedBlogId={currentEditedBlogId}
        setCurrentEditedBlogId={setCurrentEditedBlogId}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogList?.length > 0 ? (
          blogList?.map((blogItem) => (
            <Card key={blogItem._id} className="p-5">
              <CardContent>
                <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                <CardDescription>{blogItem?.description}</CardDescription>
                <div className="mt-5 flex gap-5 items-center">
                  <Button onClick={() => handleEditBlogByID(blogItem)}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteBlogByID(blogItem?._id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div>
            <Label className="text-3xl font-extrabold text-white items-center">
              No Blog found! Please add one
            </Label>
          </div>
        )}
      </div>
    </div>
  );
};
export default BlogOverview;
