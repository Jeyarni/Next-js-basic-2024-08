import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const POST = async (req) => {
  try {
    await connectToDB();
    const exactBlogData = await req.json();
    const { title, description } = exactBlogData;
    const { error } = AddNewBlog.validate({
      title,
      description,
    });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const newlyCreatedBlogItem = await Blog.create(exactBlogData);
    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong !!! Please try again",
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

export { POST };
