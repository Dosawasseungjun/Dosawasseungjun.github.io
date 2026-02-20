import os
import re

# 블로그 포스트 디렉토리 경로 (절대 경로로 설정)
BASE_DIR = "/home/dosa/blog/Dosawasseungjun.github.io"
POSTS_DIR = os.path.join(BASE_DIR, "_posts")

def update_front_matter(file_path, categories):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Front Matter 패턴 찾기 (--- ... ---)
        front_matter_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
        if not front_matter_match:
            print(f"⚠️ Front Matter 없음: {file_path}")
            return

        front_matter = front_matter_match.group(1)
        
        # 카테고리 문자열 생성 (예: [Problem Solving, Algorithm])
        # 각 카테고리에 따옴표를 붙여서 YAML 오류 방지 (예: ["Problem Solving", "Algorithm"])
        quoted_categories = [f'"{c}"' for c in categories]
        new_categories_line = f"categories: [{', '.join(quoted_categories)}]"
        
        # 기존 categories 라인 찾아서 교체 (없으면 추가)
        if re.search(r'^categories:.*$', front_matter, re.MULTILINE):
            new_front_matter = re.sub(r'^categories:.*$', new_categories_line, front_matter, flags=re.MULTILINE)
        else:
            new_front_matter = front_matter + "\n" + new_categories_line

        new_content = content.replace(front_matter, new_front_matter)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"✅ 수정 완료: {os.path.basename(file_path)} -> {categories}")

    except Exception as e:
        print(f"❌ 에러 발생 ({file_path}): {e}")

def main():
    print(f"📂 대상 폴더: {POSTS_DIR}")
    
    # _posts 폴더 순회
    for root, dirs, files in os.walk(POSTS_DIR):
        for file in files:
            if file.endswith(".md"):
                # 파일의 절대 경로
                full_path = os.path.join(root, file)
                
                # _posts 기준 상대 경로 (예: Problem Solving/Algorithm/글.md)
                rel_path = os.path.relpath(full_path, POSTS_DIR)
                
                # 경로에서 디렉토리 부분만 추출 (예: Problem Solving/Algorithm)
                category_path = os.path.dirname(rel_path)
                
                # 디렉토리가 없으면(루트) 건너뜀 (카테고리 없음)
                if not category_path:
                    print(f"ℹ️ 카테고리 없음 (루트): {file}")
                    continue
                
                # 경로 구분자(/)로 쪼개서 카테고리 리스트 생성
                # 빈 문자열 제거 및 특수문자 처리 필요 시 여기서
                categories = [c for c in category_path.split(os.sep) if c]
                
                # 파일 업데이트
                update_front_matter(full_path, categories)

if __name__ == "__main__":
    main()
