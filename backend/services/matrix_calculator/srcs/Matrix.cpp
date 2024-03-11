#include "Matrix.h"

Matrix::Matrix() {
    rows_ = 1;
    cols_ = 1;
    matrix_.resize(rows_, std::vector<double>(cols_, 0.0));
}

Matrix::Matrix(int rows, int cols) {
    if (rows < 0 || cols < 0)
        throw std::invalid_argument("Rows (cols) must be positive integers >= 0.\n");
    rows_ = rows;
    cols_ = cols;
    matrix_.resize(rows_, std::vector<double>(cols_, 0.0));
}

Matrix::Matrix(const Matrix& other) : rows_(), cols_() {
    if (this->CheckRowsCols()) {
        throw std::invalid_argument("Rows (cols) are invalid. They must be positive integers >= 0.\n");
    }
    this->DeepCopy(other);
}

//Matrix::Matrix(Matrix&& other) noexcept {
//
//}

Matrix::~Matrix() {
    for (int i = 0; i < rows_; ++i) {
        matrix_[i].clear();
    }
    matrix_.clear();
}

int main(){
    int r = 3;
    int c = 3;
    Matrix m(r, c);
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            m[i][j] = rand() % 10;
        }
    }

    Matrix m2(r, c);
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j)
            m2[i][j] = rand() % 10;
    }
//
//    m.Print();
//    m.GaussElimination(false);
//    m.Print();
//    m2.Print();

    Matrix m3(r, c);
    m3 = m * m2;


    return 0;
}




