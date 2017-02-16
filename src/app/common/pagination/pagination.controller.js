class PaginationController {
  pagesAmount = 5;
  pages = [];

  constructor() {
  }

  $onChanges(changes) {
    if (changes.total || changes.current) {
      this.calculatePages();
    }
  }

  onPrevClick() {
    if (this.current - 1 > 0) {
      this.onPageChange({ $page: this.current - 1 });
    }
  }

  onNextClick() {
    if (this.current + 1 <= this.total) {
      this.onPageChange({ $page: this.current + 1 });
    }
  }

  calculatePages() {
    let startPage, endPage;
    if (this.total <= this.pagesAmount) {
      startPage = 1;
      endPage = this.total;
    } else {
      if (this.current < this.pagesAmount - 1) {
        startPage = 1;
        endPage = this.pagesAmount;
      } else if (this.current + 2 >= this.total) {
        startPage = this.total - this.pagesAmount + 1;
        endPage = this.total;
      } else {
        startPage = this.current - 2;
        endPage = this.current + 2;
      }
    }
    let pages = [];
    for (let p = startPage; p <= endPage; p++) {
      pages.push(p);
    }
    this.pages = pages;
  }
}

export default PaginationController;
