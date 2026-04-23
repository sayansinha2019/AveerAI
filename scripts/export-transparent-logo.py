#!/usr/bin/env python3
"""
Rebuild public/logo-transparent.webp from the canonical logo PNG in the repo root.
Requires: pip install rembg onnxruntime pillow
"""
from pathlib import Path

import io

from PIL import Image
from rembg import remove

ROOT = Path(__file__).resolve().parents[1]
# Primary source (update if you replace the master asset)
src = ROOT / "ChatGPT Image Apr 23, 2026, 10_46_41 PM.png"
if not src.exists():
    src = ROOT / "logo.jpeg"
out = ROOT / "public" / "logo-transparent.webp"


def main() -> None:
    raw = remove(src.read_bytes())
    im = Image.open(io.BytesIO(raw)).convert("RGBA")
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    w, h = im.size
    pad = 6
    canvas = Image.new("RGBA", (w + 2 * pad, h + 2 * pad), (0, 0, 0, 0))
    canvas.paste(im, (pad, pad))
    im = canvas
    target_w = 720
    if im.width > target_w:
        nh = int(im.height * target_w / im.width)
        im = im.resize((target_w, nh), Image.Resampling.LANCZOS)
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, quality=92, method=6)
    print("Wrote", out, im.size, "from", src.name)


if __name__ == "__main__":
    main()
