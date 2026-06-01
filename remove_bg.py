import os
from PIL import Image

def remove_white_bg(image_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    new_data = []
    
    for item in datas:
        # Change all white (also shades of white)
        # to transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(image_path, "PNG")
    print(f"Processed {image_path}")

icons_dir = "/Users/ronakchak/Documents/GPThemes/src/assets/icons"
for file in os.listdir(icons_dir):
    if file.endswith(".png"):
        try:
            remove_white_bg(os.path.join(icons_dir, file))
        except Exception as e:
            print(f"Error processing {file}: {e}")
