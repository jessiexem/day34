package vttp.csf.day34.server.models;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class Registration {
    private String id;
    private String name;
    private String email;


    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public static Registration create(String json) throws IOException{
        
        final Registration reg = new Registration();

        InputStream is = new ByteArrayInputStream(json.getBytes());
            
            JsonReader reader = Json.createReader(is);
            JsonObject obj = reader.readObject();

            reg.setName(obj.getString("name"));
            reg.setEmail(obj.getString("email"));

            if(obj.containsKey("id")) {
                reg.setId(obj.getString("id"));
            }


        return reg;

    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
        .add("id",id)
        .add("name", name)
        .add("email", email)
        .build();
    }

}
