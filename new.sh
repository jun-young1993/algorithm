#!/bin/bash

# 두 번째 인자 값을 변수에 저장
name="$1"
filename="$2"
second_arg="$3"

# 두 번째 인자가 "data" 또는 "al"인지 확인
if [ "$second_arg" == "data" ] || [ "$second_arg" == "al" ]; then
    if [ "$second_arg" == "data" ]; then
      cd ./src/data-structure
    else
      echo "아직 사용안하는 al 두번째 인자"
    fi

else
    echo "두 번째 인자로 'data' 또는 'al'이 아닌 값이 들어갔습니다."
fi

mkdir -p "$name/__test__"

touch "./$name/__test__/$filename.test.js"
echo "import $filename from '../$filename';

describe('$filename', () => {

})" > "./$name/__test__/$filename.test.js"


touch "./$name/$filename.js"
echo "export default class $filename {
    constructor() {

    }
}" > "./$name/$filename.js"

touch "./$name/readme.md"
echo "# $name" > "./$name/readme.md"

exit 0
