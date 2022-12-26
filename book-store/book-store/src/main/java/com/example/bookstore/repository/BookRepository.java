package com.example.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.bookstore.Entity.Book;

@CrossOrigin("http://localhost:4200")
public interface BookRepository extends JpaRepository<Book, Long>{

}
