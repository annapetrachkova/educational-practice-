import AdCollection.Ad;
import AdCollection.AdService;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

public class OneAd extends HttpServlet {

    private AdService posts = AdService.getInstance();

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String str = request.getQueryString();
        String sID = str.substring(3, str.length());
        int id = Integer.parseInt(sID);
        response.getOutputStream().println("it Works id= " + id);
        if (posts.removePost(id)) {
            response.getOutputStream().println("deleted\n");
        } else {
            response.getOutputStream().println("Not found\n");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String str = request.getQueryString();
        String sID = str.substring(3, str.length());
        int id = Integer.parseInt(sID);
        Ad item = posts.getPost(id);

        if (item != null) {
            response.getWriter().print((new Gson()).toJson(posts.getPost(id)));
        } else {
            response.getOutputStream().println("Not found\n");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        String description = request.getParameter("description");
        String vendor = request.getParameter("vendor");
        String link = request.getParameter("link");
        String discount = request.getParameter("discount");
        String photoLink = request.getParameter("photoLink");
        Date date = new Date();
        String createdAt = date.toString();
        String validUntil = date.toString();

        Ad item = new Ad(id, description, createdAt, link, vendor, new ArrayList<String>(), discount, validUntil, photoLink);

        response.getWriter().print((new Gson()).toJson(posts.getPost(id)));
        if (posts.addPost(item)) {
            response.getOutputStream().println("Success\n");
        } else {
            response.getOutputStream().println("Invalid\n");
        }
    }

}
