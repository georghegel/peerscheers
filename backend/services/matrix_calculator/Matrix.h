#ifndef C_MATRIX_H
#define C_MATRIX_H

#include <vector>
#include <iostream>
#include <random>

class Matrix {
private:
    int rows_, cols_;
    std::vector<std::vector<double> > matrix_;

public:
    Matrix();
    Matrix(int rows, int cols);
    Matrix(const Matrix& other);
//    Matrix(Matrix&& other) noexcept ;
    ~Matrix();

    /************************************************/
    /*                                              */
    /*              OVERLOADED OPERATORS            */
    /*                                              */
    /************************************************/

    std::vector<double>& operator [](int i) {
        return matrix_[i];
    }

    double& operator ()(int i, int j){
        if ((i < 1 || i > rows_) || (j < 1 || j > cols_))
            throw std::invalid_argument("Out of bound!\n");
        return matrix_[i][j];
    }

    Matrix operator + (Matrix const& other) {
        if (rows_ != other.GetRows() || cols_ != other.GetCols())
            throw std::invalid_argument("Rows and cols of the matrices don't match!");
        *this += other;
        return *this;
    }

//    Matrix operator - (Matrix t, Matrix const& other) {
//        if (t.GetRows() != other.GetRows() || t.GetCols() != other.GetCols())
//            throw std::invalid_argument("Rows and cols of the matrices don't match!");
//        t -= other;
//        return t;
//    }
//
//    Matrix operator * (Matrix t, Matrix const& other) {
//        if (t.GetCols() != other.GetRows())
//            throw std::invalid_argument("Columns of the first matrix doesn't equal to rows of the second matrix!\n");
//        t *= other;
//        return t;
//    }

    Matrix& operator = (const Matrix& other){
        if (rows_ != other.rows_ || cols_ != other.cols_) // Maybe it's not necessary because of the nature = operator
            throw std::invalid_argument("Rows or cols of the matrices don't match!\n");
        this->DeepCopy(other);
        return *this;
    }

    bool operator == (const Matrix& other) {
        return this->EqMatrix(other);
    }

    Matrix& operator += (const Matrix& other) {
        if (rows_ != other.rows_ || cols_ != other.cols_)
            throw std::invalid_argument("Rows or cols of the matrices don't match!\n");
        this->SumMatrix(other);
        return *this;
    }

    Matrix& operator -= (const Matrix& other) {
        if (rows_ != other.rows_ || cols_ != other.cols_)
            throw std::invalid_argument("Rows or cols of the matrices don't match!\n");
        this->SubMatrix(other);
        return *this;
    }

    Matrix& operator *= (const Matrix& other) {
        if (cols_ != other.rows_) {
            throw std::invalid_argument("Columns of the first matrix doesn't equal to rows of the second matrix!\n");
        }
        this->MulMatrix(other);
        return *this;
    }

    Matrix& operator *= (double num) {
        this->MulNumber(num);
        return *this;
    }

    /************************************************/
    /*                                              */
    /*               MEMBER FUNCTIONS               */
    /*                                              */
    /************************************************/


    bool EqMatrix(const Matrix& other);
//    bool IsOrthogonal(const Matrix& other);
//    bool IsSymmetric(const Matrix& other);

    void SumMatrix(const Matrix& other);
    void SubMatrix(const Matrix& other);
    void MulNumber(double num);
    void MulMatrix(const Matrix& other);

    Matrix Transpose();
//    Matrix Diagonal(const int num);
//    Matrix Identity();
//    double Trace();

    Matrix CalcComplements();
    double Determinant();
    Matrix InverseMatrix();

    void GaussElimination(bool inverse);
    void SwapRows(int row_1, int row_2);
    void CreateAugmentMatrix(const Matrix& augment_matrix);
    void InverseAugmented(const Matrix& augment_matrix);
    void CopyResult(Matrix& result);

//    std::vector<Matrix> SVD();
//    int Rank();

    void DeepCopy(const Matrix& other);
    bool CheckRowsCols() const;
    int GetCols() const;
    int GetRows() const;
    void Print();

};


#endif //C_MATRIX_H
