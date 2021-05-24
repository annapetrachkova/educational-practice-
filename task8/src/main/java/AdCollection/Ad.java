package AdCollection;
import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Ad {
    private int id;
    private String description;
    private String createdAt;
    private String link;
    private String vendor;
    private String photoLink;
    private List<String> hashTags;
    private String discount;
    private String validUntil;
    private Double rating;
    private List<String> reviews;


    public Ad(int id, String description, String createdAt, String link, String vendor, List<String> hashTags, String discount, String validUntil, String photoLink) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.link = link;
        this.vendor = vendor;
        this.hashTags = hashTags != null ? new ArrayList<>(hashTags) : null;
        this.discount = discount;
        this.photoLink = photoLink;
        this.validUntil = validUntil;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }

    public String getValidUntil() {
        return validUntil;
    }

    public void setValidUntil(String validUntil) {
        this.validUntil = validUntil;
    }

    public List<String> getReviews() {
        return reviews;
    }

    public void setReviews(List<String> reviews) {
        this.reviews = reviews;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String printPost() {
        String str = "id " + getId() + "description " + getDescription();
        return str;
    }

    @Override
    public String toString() {
        JSONObject json = new JSONObject();
        json.put("id", id);
        json.put("description", description);
        json.put("createdAt", createdAt);
        json.put("vendor", vendor);
        json.put("link", link);
        json.put("photoLink", photoLink);
        json.put("hashTags", hashTags.toString());
        json.put("discount", discount);
        json.put("validUntil", validUntil);
        json.put("rating", rating);
        json.put("reviews", reviews.toString());
        return json.toString();
    }

}

