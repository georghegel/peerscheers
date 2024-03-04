//
// Created by Rachel Sanford on 2/23/24.
//

#include "Matrix.h"

Matrix Matrix::Transpose() {
    if (!this->CheckRowsCols()) {
        throw std::invalid_argument("Rows (cols) are invalid. They must be positive integers >= 0.\n");
    }
    Matrix result(cols_, rows_);
    for (int i = 0; i < rows_; ++i) {
        for (int j = 0; j < cols_; ++j) {
            result[j][i] = matrix_[i][j];
        }
    }
    return result;
}
