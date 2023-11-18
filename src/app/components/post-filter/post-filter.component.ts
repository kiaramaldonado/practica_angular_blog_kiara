import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css']
})
export class PostFilterComponent implements OnInit {
  sortOrder: 'newest' | 'oldest' = 'newest';
  searchTerm: string = '';

  @Output() filterChanged = new EventEmitter<{ sortOrder: string, searchTerm: string }>();

  ngOnInit() {
    this.emitFilterChange();
  }

  onSortChange() {
    this.emitFilterChange();
  }

  onSearchInput() {
    this.emitFilterChange();
  }

  clearFilters() {
    this.sortOrder = 'newest';
    this.searchTerm = '';
    this.emitFilterChange();
    window.location.reload();
  }

  private emitFilterChange() {
    this.filterChanged.emit({ sortOrder: this.sortOrder, searchTerm: this.searchTerm });
  }
}
