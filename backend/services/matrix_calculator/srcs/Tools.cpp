#include "Matrix.h"

void Matrix::Print() {
    for (int i = 0; i < rows_; ++i) {
        for (int j = 0; j < cols_; ++j)
            std::cout << matrix_[i][j] << '\t';
        std::cout << '\n';
    }
}

int Matrix::GetCols() const {
    return this->cols_;
}

int Matrix::GetRows() const {
    return this->rows_;
}

bool Matrix::CheckRowsCols() const {
    return (rows_ < 0 || cols_ < 0);
}

void Matrix::DeepCopy(const Matrix& other){
    rows_ = other.rows_;
    cols_ = other.cols_;
    this->matrix_.resize(rows_, std::vector<double>(cols_, 0.0));

    for (int i = 0; i < rows_; ++i) {
        for (int j = 0; j < cols_; ++j) {
            matrix_[i][j] = other.matrix_[i][j];
        }
    }
}

//bool Matrix::IsOrthogonal(const Matrix& other) {
//    Matrix copy = other;
//    Matrix copy2 = *this;
////    this->MulMatrix(copy.Transpose());
//    if (copy2.MulMatrix(copy.Transpose()) == copy.MulMatrix(copy2.Transpose())) {
//
//    }
//}

bool Matrix::IsSymmetric() {
    if (this->Transpose() == *this) {
        return true;
    }
    return false;
}

bool Matrix::IsSkewSymmetric() {
    Matrix copy = *this;
    this->MulNumber(-1);
    if (copy.Transpose() == *this) {
        return true;
    }
    return false;
}