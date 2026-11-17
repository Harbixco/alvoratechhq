import os
from PIL import Image

def optimize_image(filepath, max_width=800, quality=78, target_format='WEBP'):
    if not os.path.isfile(filepath):
        return
    try:
        with Image.open(filepath) as img:
            img = img.convert('RGB')
            w, h = img.size
            if w > max_width:
                new_h = int(h * (max_width / w))
                img = img.resize((max_width, new_h), Image.Resampling.LANCZOS)
            
            # Save optimized webp
            webp_path = os.path.splitext(filepath)[0] + '.webp'
            img.save(webp_path, 'WEBP', quality=quality, method=6)
            
            # If original was jpg, also optimize the jpg so old paths don't 404
            if filepath.lower().endswith(('.jpg', '.jpeg')):
                img.save(filepath, 'JPEG', quality=quality, optimize=True)

            orig_size = os.path.getsize(filepath) / 1024
            webp_size = os.path.getsize(webp_path) / 1024
            print(f"Optimized: {os.path.basename(filepath)} ({orig_size:.1f}KB) -> {os.path.basename(webp_path)} ({webp_size:.1f}KB)")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

base_dirs = [
    r'public\towing-company\images',
    r'public\towing-company\images\towing-gallery',
    r'public\tree-removal\images',
    r'public\demos\towing-company\images',
    r'public\demos\towing-company\images\towing-gallery',
    r'public\demos\tree-removal\images',
    r'src\demos\towing-company\images',
    r'src\demos\towing-company\images\towing-gallery',
    r'src\demos\tree-removal\images',
]

for d in base_dirs:
    if not os.path.exists(d):
        continue
    print(f"\nProcessing {d}:")
    for f in os.listdir(d):
        ext = os.path.splitext(f)[1].lower()
        if ext in ('.jpg', '.jpeg', '.webp', '.png'):
            fp = os.path.join(d, f)
            # Custom max_width based on image role
            if 'hero' in f.lower() or 'crew' in f.lower():
                mw = 1000
            elif 'gallery' in d.lower():
                mw = 600
            else:
                mw = 800
            optimize_image(fp, max_width=mw, quality=78)

print("\nAll image optimization completed successfully.")
