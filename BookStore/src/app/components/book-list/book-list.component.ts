import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../common/book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 books: Book[] ;
 

  constructor(private book_service: BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(){
    this.book_service.getBooks().subscribe(
      data => {
       this.books = data;
      }
    );
  }
}
