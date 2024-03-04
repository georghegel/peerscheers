//
// Created by Rachel Sanford on 2/23/24.
//

#include "Matrix.h"

Matrix operator + (Matrix t, Matrix const& other) {
    if (t.GetRows() != other.GetRows() || t.GetCols() != other.GetCols())
        throw std::invalid_argument("Rows and cols of the matrices don't match!");
    t += other;
    return t;
}

Matrix operator - (Matrix t, Matrix const& other) {
    if (t.GetRows() != other.GetRows() || t.GetCols() != other.GetCols())
        throw std::invalid_argument("Rows and cols of the matrices don't match!");
    t -= other;
    return t;
}

Matrix operator * (Matrix t, Matrix const& other) {
    if (t.GetCols() != other.GetRows())
        throw std::invalid_argument("Columns of the first matrix doesn't equal to rows of the second matrix!\n");
    t *= other;
    return t;
}