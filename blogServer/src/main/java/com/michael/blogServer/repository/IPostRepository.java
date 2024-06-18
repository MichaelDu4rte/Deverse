package com.michael.blogServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.michael.blogServer.entity.Post;

@Repository
public interface IPostRepository extends JpaRepository<Post, Long> {

}
