package com.example.demo1;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(value = "/get")
public class name extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        String name = request.getParameter("name");
        if(name.length() > 100){
            throw new IOException();
        }
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Name is " + name + "</h1>");
        out.println("</body></html>");
    }
}
