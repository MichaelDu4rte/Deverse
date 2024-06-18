package com.michael.blogServer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.michael.blogServer.entity.Post;
import com.michael.blogServer.service.IPostService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    @Autowired
    private IPostService postService;

    @PostMapping
    public ResponseEntity<?> createPost(@RequestBody Post post) {

        try {
            Post createdPost = postService.savePost(post);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

    @GetMapping
    public ResponseEntity<List<Post>> findAll() {
        try {
            List<Post> posts = postService.findAll();
            return ResponseEntity.status(HttpStatus.OK).body(posts);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{postId}")
    public ResponseEntity<?> getPostById(@PathVariable Long postId) {
        try {
            Post post = postService.getPostById(postId);
            return ResponseEntity.ok(post);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/{postId}/like")
    public ResponseEntity<?> likePost(@PathVariable Long postId) {
        try {
            postService.likePost(postId);
            return ResponseEntity.ok(new String[]{"Post like sucess"});
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
