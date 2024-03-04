#include "../Matrix.h"

void Matrix::Diagonal(int num) {
    if (rows_ != cols_) {
        throw std::invalid_argument("Rows and cols must be equal.\n");
    }
    for (int i = 0; i < rows_; ++i) {
        for (int j = 0; j < cols_; ++j) {
            if (i == j)
                matrix_[i][j] = num;
            else
                matrix_[i][j] = 0;
        }
    }
}

void Matrix::Identity() {
    this->Diagonal(1);
}

double Matrix::Trace() {
    double trace = 0.0;
    if (rows_ != cols_) {
        throw std::invalid_argument("Matrix must be square (e.g. rows == cols).\n");
    }
    for (int i = 0; i < rows_; ++i) {
        for (int j = 0; j < cols_; ++j) {
            if (i == j)
                trace += matrix_[i][j];
        }
    }
    return trace;
}