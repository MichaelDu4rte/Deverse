package com.michael.blogServer.service;

import java.util.List;

import com.michael.blogServer.entity.Post;

public interface IPostService {

    Post savePost(Post post);

    List<Post> findAll();

    Post getPostById(Long id);

    void likePost(Long postId);
}
