"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddNewBlog = ({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  blogFormData,
  setBlogFormData,
  handelSaveBlogData,
  currentEditedBlogId,
  setCurrentEditedBlogId,
}) => {
  return (
    <>
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>
      <Dialog
        open={openBlogDialog}
        onOpenChange={() => {
          setOpenBlogDialog(!openBlogDialog);
          setBlogFormData({ title: "", description: "" });
          setCurrentEditedBlogId(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                placehlder="Enter blog title"
                id="title"
                className="col-span-3"
                value={blogFormData.title}
                onChange={(e) =>
                  setBlogFormData({ ...blogFormData, title: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                placehlder="Enter blog description"
                id="description"
                className="col-span-3"
                value={blogFormData.description}
                onChange={(e) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handelSaveBlogData} type="button">
              {loading ? "Saving changes" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddNewBlog;
