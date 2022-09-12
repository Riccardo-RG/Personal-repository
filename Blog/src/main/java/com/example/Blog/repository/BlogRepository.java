package com.example.Blog.repository;

import com.example.Blog.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog,Integer> {
/* UPDATE blog SET blog_body = 'ciao'
               WHERE user_id = 9 */
@Transactional
@Modifying
@Query ("UPDATE Blog SET blog_title= :blog_title,blog_body= :blog_body WHERE user_id= :user_id")
 void updateBlog(@Param("blog_title") String blog_title, @Param("blog_body") String blog_body, @Param("user_id") Integer user_id);



}
