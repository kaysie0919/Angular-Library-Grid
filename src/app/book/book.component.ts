import { CommonModule, } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  providers: [BookService],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  books: any[] = [];

  constructor(private booksService: BookService) {}

  ngOnInit(): void {
    
    this.books = this.booksService.getBooks();
  }

}
