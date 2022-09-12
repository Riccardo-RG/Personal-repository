package com.example.Blog.entity;




import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Getter
@Setter
@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int user_id; //Ricorda la rottura diabolica e chiedi
    public String blog_title;
    public String blog_body;
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date day ;

    public Blog() {

    }

    public Blog(String blog_title, String blog_body, Date day){

        this.blog_title=blog_title;
        this.blog_body = blog_body;
        this.day = day;

    }




    public Blog(Blog blog){

        this.blog_title=blog_title;
        this.blog_body = blog_body;
        this.day = day;

    }



}


