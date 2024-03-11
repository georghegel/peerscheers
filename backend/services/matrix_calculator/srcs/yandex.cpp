#include <vector>
#include <iostream>



class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& numbers, int target) {
        int p1 = 0;
        int p2 = numbers.size() - 1;
        std::vector<int> a;
        for (int i = 0; i < numbers.size() && p2 < numbers.size() && p1 < numbers.size(); ++i) {
            if (numbers[p1] + numbers[p2] < target) {
                ++p1;
            } else if (numbers[p1] + numbers[p2] > target) {
                --p2;
            } else {
                a = {p1 + 1, p2 + 1};
            }
        }
        return a;
    }
};

int main(){

    Solution a;
    std::vector<int> arr = {5, 25, 75};
    std::vector<int> res = a.twoSum(arr, 100);

}