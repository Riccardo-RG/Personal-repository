package com.example.Blog.controller;

import com.example.Blog.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Blog.repository.BlogRepository;

import java.util.Date;
import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
public class BlogController {
    @Autowired
    private BlogRepository blogRepository;
@CrossOrigin
@RequestMapping("/nBlog")
public String insertNewBlog(@RequestParam String blog_title, String blog_body, Date day){
    try {
        Blog blog= new Blog(blog_title, blog_body,day);
        blogRepository.save(blog);
    }catch (Exception e) {
        return "Si più dettagliato nel raccontarmi";
    }
    return "Ho capito";
}
@CrossOrigin
    @GetMapping("/blogs")
    public List<Blog> getAll(){

    return blogRepository.findAll();

    }

    @CrossOrigin
    @DeleteMapping ("/blogs/{id}")
    public String deleteContact (@PathVariable Integer id) {
        blogRepository.deleteById(id);
        return "Delete contact done";

    }
    @CrossOrigin
    @RequestMapping("/blogs/{blog_title}/{blog_body}/{user_id}")
public  String updateBlog(@PathVariable String blog_title, @PathVariable String blog_body, @PathVariable Integer user_id){
    blogRepository.updateBlog(blog_title, blog_body, user_id);
    return "The update is correctly done, good job Riccardo, we are very proud of you!!! keep going !!! :D ";

    }
}





/*Creo il Metodo da spring per la Post e faccio una prova di funzionamento da browser

 */