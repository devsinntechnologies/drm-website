from PIL import Image
from pathlib import Path

src = Path(
    r"C:\Users\Possible\.cursor\projects\c-Users-Possible-OneDrive-Documents-digiNizam\assets\c__Users_Possible_AppData_Roaming_Cursor_User_workspaceStorage_1b3e0066a317d4a413a8052c78cb06bf_images_Group_11-1e061dc1-202c-4d53-9d6c-496031afef71.png"
)
app = Path(r"c:\Users\Possible\OneDrive\Documents\digiNizam\drm-website\src\app")
public = Path(r"c:\Users\Possible\OneDrive\Documents\digiNizam\drm-website\public")

im = Image.open(src).convert("RGBA")


def fit_square(img, size, pad_ratio=0.08, bg=(255, 255, 255, 255)):
    canvas = Image.new("RGBA", (size, size), bg)
    max_side = int(size * (1 - 2 * pad_ratio))
    w, h = img.size
    scale = min(max_side / w, max_side / h)
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    resized = img.resize((nw, nh), Image.LANCZOS)
    x = (size - nw) // 2
    y = (size - nh) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


# Build multi-resolution ICO correctly (Pillow needs largest first as primary)
sizes = [16, 32, 48]
frames = [fit_square(im, s) for s in sizes]
# Save via largest image + append smaller ones
favicon_path = app / "favicon.ico"
frames[-1].save(
    favicon_path,
    format="ICO",
    sizes=[(s, s) for s in sizes],
    append_images=frames[:-1],
)

# Mirror to public for crawlers that hit /favicon.ico directly
public_favicon = public / "favicon.ico"
public_favicon.write_bytes(favicon_path.read_bytes())

# Also drop a clear 48px PNG Google can use
fit_square(im, 48).save(public / "favicon-48.png", format="PNG", optimize=True)

# Verify
check = Image.open(favicon_path)
print("favicon primary:", check.size, "frames:", getattr(check, "n_frames", 1))
for i in range(getattr(check, "n_frames", 1)):
    check.seek(i)
    print(f"  frame {i}: {check.size}")
print("public favicon bytes:", public_favicon.stat().st_size)
