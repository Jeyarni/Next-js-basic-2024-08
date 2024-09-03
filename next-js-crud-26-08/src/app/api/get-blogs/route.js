import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    await connectToDB();
    const exactAllBlogsFromDataBase = await Blog.find({});

    if (exactAllBlogsFromDataBase) {
      return NextResponse.json({
        success: true,
        data: exactAllBlogsFromDataBase,
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

export { GET };
