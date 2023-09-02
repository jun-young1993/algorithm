#!/bin/bash

name="$1"

# find 명령어를 사용하여 ./src/*/__test__ 경로를 검색하고 해당 경로를 출력합니다.
find ./src -type d -name "__test__" | while read -r test_dir; do
  test_file="$test_dir/$name.test.js"
  if [ -f "$test_file" ]; then
    jest "$test_file"
  fi
done


