package AdCollection;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

public class AdService {
    private List<Ad> list;

    public static AdService INSTANCE = null;

    public static AdService getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new AdService();
        }
        return INSTANCE;
    }

    private AdService() {
        this.list = new ArrayList<Ad>(Arrays.asList(
                new Ad(1, "Ремонт стиральных машин", "2021-02-01T11:00:00", "http://stiralkino.by/",
                "Анна Петрачкова", new ArrayList<String>(Arrays.asList("Бытовые услуги", "Ремонт", "Строительные работы",
                        "Прочие услуги")), "15", "2021-05-01T24:00:00",
                        "https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/remont.jpg");

                new Ad(2, "Репетиторы", "2021-01-01T11:00:00", "https://profi-bel.by/repetitor/",
                "Степан", new ArrayList<String>(Arrays.asList("Образовательные услуги", "Прочие услуги")),
                        "10", "2021-03-21T24:00:00",
                "https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/profi.jpg");

                new Ad(3, "Маникюр и педикюр", "2020-12-12T11:00:00", "https://fokanail.by/",
                "Алеся Хаткевич", new ArrayList<String>(Arrays.asList("Красота и здоровье")),
                "30", "2021-03-31T24:00:00",
                "https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/nails.jpg");

                new Ad(4, "Клининговая компания", "2020-12-01T11:00:00", "https://clean-up.by/",
                "Евгения", new ArrayList<String>(Arrays.asList("Бытовые услуги", "Ремонт", "Прочие услуги")),
                "15", "2021-04-09T24:00:00",
                "https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/clean.jpg");

                new Ad(5, "Услуги фотошопа", "2020-11-14T11:00:00", "https://www.prettyphoto.ru/",
                "ООО Боннети", new ArrayList<String>(Arrays.asList("Фото и видеосъемка", "Прочие услуги")),
                "50", "2021-09-14T24:00:00",
                "https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/ps.jpg");

                new Ad(10, "Макияж", "2021-08-01T11:00:00", "https://galinamakeup.by",
                "Евгения", new ArrayList<String>(Arrays.asList("Красота и здоровье")),
                "40", "2021-03-01T24:00:00",
                "https://raw.githubusercontent.com/annapetrachkova/educational-practice-/UI/UI/assets/makeup.jpg'");

    }

    public List<Ad> getPage(int skip, int top, Map<String, String> filterConfig) {
        List<Ad> filteredAds = new ArrayList<Ad>();
        for (Map.Entry pair : filterConfig.entrySet()) {
            if (pair.getKey().equals("vendor")) {
                list.stream()
                        .filter(adv -> adv.getVendor().toLowerCase().contains(pair.getValue().toString().toLowerCase()))
                        .forEach(filteredAds::add);
            } else if (pair.getKey().equals("creationDate")) {
                list.stream()
                        .filter(adv -> adv.getCreatedAt().equals(pair.getValue()))
                        .forEach(filteredAds::add);
            }
        }
        if (filterConfig.size() == 0) {
            filteredAds = new ArrayList<Ad>(list);
        }
        if (top > filteredAds.size()) {
            top = filteredAds.size();
        }
        if (skip >= filteredAds.size()) {
            skip = 0;
        }
        if (skip + top > filteredAds.size()) {
            return filteredAds.subList(skip, filteredAds.size());
        } else {
            return filteredAds.subList(skip, skip + top);
        }

    }

    public Ad getPost(int id) {
        for (Ad item : list) {
            if (item.getId() == id) {
                return item;
            }
        }
        return null;
    }

    public boolean validatePost(Ad adv) {
        for (Ad item : list) {
            if (item.getId() == adv.getId()) {
                return false;
            }
        }
        if (adv.getDescription() == null || adv.getDescription().length() > 200)
            return false;
        if (adv.getVendor() == null)
            return false;

        if (adv.getCreatedAt() == null)
            return false;

        return true;
    }

    public boolean addPost(Ad adv) {
        if (validatePost(adv)) {
            list.add(adv);
            return true;
        } else
            return false;
    }

    public boolean editPost(int id, Ad filterConfig) {
        Ad adv = getPost(id);
        if (adv == null) {
            return false;
        }
        if (filterConfig.getDescription() != null && filterConfig.getDescription().length() <= 200) {
            adv.setDescription(filterConfig.getDescription());
        }
        if (filterConfig.getHashTags() != null) {
            adv.setHashTags(filterConfig.getHashTags());
        }
        return true;
    }

    public boolean removePost(int id) {
        Ad adv = getPost(id);
        if (adv != null) {
            list.remove(adv);
            return true;
        } else {
            return false;
        }
    }

    public String toJsonString(List<Ad> list) {
        if (list.size() > 0) {
            Gson gson = new Gson();
            StringBuilder sb = new StringBuilder();
            sb.append("[");
            for (Ad post : list) {
                sb.append(gson.toJson(post)).append(",");
            }
            sb.append("]");
            return sb.toString().replace(",]", "]");
        }
        return "";
    }

}