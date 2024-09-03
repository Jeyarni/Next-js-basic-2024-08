import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

const DELETE = async (req) => {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogId = searchParams.get("id");

    if (!getCurrentBlogId) {
      return NextResponse.json({
        success: false,
        message: "Blog ID is required",
      });
    }

    const deleteCurrentBlogByID = await Blog.findByIdAndDelete(
      getCurrentBlogId
    );

    if (deleteCurrentBlogByID) {
      return NextResponse.json({
        success: true,
        message: "Blog is deleted Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong !!! Please try again",
    });
  }
};

export { DELETE };
