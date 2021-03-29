package com.example.demo1;

import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(value = "/check")
public class check extends HttpServlet {
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("json");
        PrintWriter out = response.getWriter();
        out.println("{\"success\" : true}");
    }
}