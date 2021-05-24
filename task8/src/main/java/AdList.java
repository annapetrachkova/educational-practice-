import AdCollection.Ad;
import AdCollection.AdService;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AdList extends HttpServlet {

    private AdService posts = AdService.getInstance();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        int top, skip;
        if (request.getParameter("skip") != null) {
            skip = Integer.parseInt(request.getParameter("skip"));
        } else {
            skip = 0;
        }
        if (request.getParameter("top") != null) {
            top = Integer.parseInt(request.getParameter("top"));
        } else {
            top = 0;
        }
        String vendor = request.getParameter("vendor");
        String createdAt = request.getParameter("createdAt");

        Map<String, String> filterConfig = new HashMap<>();
        if (vendor != null) {
            filterConfig.put("vendor", vendor);
            response.getOutputStream().println("we have vendor" + skip + top);
        }
        if (createdAt != null) {
            filterConfig.put("createdAt", createdAt);
        }

        List<Ad> res = new ArrayList<>(posts.getPage(skip, top, filterConfig));
        if (res.size() == 0) {
            response.getOutputStream().println("Not found");
        } else {
            response.getOutputStream().println(posts.toJsonString(res));
        }
    }
}
