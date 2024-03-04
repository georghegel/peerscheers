#include "../Matrix.h"

int Matrix::Rank() {
    this->GaussElimination(false);
    int rank = rows_;
    int count_zero_elements = 0;
    for (int i = 0; i < rows_; ++i) {
        for (int j = 0; j < cols_; ++j) {
            if (matrix_[i][j] == 0.0) {
                ++count_zero_elements;
            }
        }
        if (count_zero_elements == cols_)
            --rank;
        count_zero_elements = 0;
    }
    return rank;
}