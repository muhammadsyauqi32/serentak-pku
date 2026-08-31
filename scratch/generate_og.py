import os
from PIL import Image, ImageDraw, ImageFont

def generate_og_image():
    width = 1200
    height = 630
    
    # Create background image with rich dark burgundy gradient/solid
    bg_color = (26, 11, 11)  # #1A0B0B
    img = Image.new("RGB", (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw geometric / decorative borders and background accents
    burgundy_color = (90, 11, 20)  # #5A0B14
    gold_color = (197, 160, 89)   # #C5A059
    cream_color = (247, 241, 232) # #F7F1E8
    
    # Decorative border rectangle
    draw.rectangle([20, 20, width - 20, height - 20], outline=gold_color, width=3)
    draw.rectangle([28, 28, width - 28, height - 28], outline=burgundy_color, width=1)
    
    # Decorative corner accents
    corner_size = 40
    # Top left corner accent
    draw.rectangle([20, 20, 20 + corner_size, 20 + corner_size], fill=gold_color)
    # Bottom right corner accent
    draw.rectangle([width - 20 - corner_size, height - 20 - corner_size, width - 20, height - 20], fill=gold_color)
    
    # Header tag pill
    pill_box = [60, 75, 480, 115]
    draw.rectangle(pill_box, fill=burgundy_color, outline=gold_color, width=2)
    
    # Try loading default fonts or built-in font fallback
    try:
        font_pill = ImageFont.truetype("arial.ttf", 16)
        font_title = ImageFont.truetype("arialbd.ttf", 52)
        font_subtitle = ImageFont.truetype("arialbd.ttf", 28)
        font_desc = ImageFont.truetype("arial.ttf", 22)
        font_org = ImageFont.truetype("arialbd.ttf", 18)
    except Exception:
        font_pill = font_title = font_subtitle = font_desc = font_org = ImageFont.load_default()
        
    draw.text((80, 84), "ORMAWA EKSEKUTIF PKU IPB 2026", fill=gold_color, font=font_pill)
    
    # Main Event Title
    draw.text((60, 150), "SERENTAK 5.0 X RBB 2026", fill=gold_color, font=font_title)
    
    # Subtitle / Theme
    draw.text((60, 230), '"Politrik: Seni Berkuasa dengan Propaganda"', fill=cream_color, font=font_subtitle)
    
    # Description
    desc_lines = [
        "Ruang Kompetisi, Literasi, & Ekspresi Mahasiswa IPB University",
        "Kompetisi Debat & Orasi Mahasiswa 2026",
        "Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU"
    ]
    
    y_pos = 300
    for line in desc_lines:
        draw.text((60, y_pos), f"• {line}", fill=(220, 210, 195), font=font_desc)
        y_pos += 38
        
    # Organizer badge at bottom left
    draw.line([(60, 480), (700, 480)], fill=gold_color, width=2)
    draw.text((60, 505), "Penyelenggara: Ormawa Eksekutif PKU IPB University", fill=gold_color, font=font_org)
    draw.text((60, 535), "Departemen Kajian Aksi dan Strategis", fill=cream_color, font=font_org)
    
    # Try overlaying logo if exists
    logo_path = os.path.join("public", "images", "logo.png")
    mascot_path = os.path.join("public", "images", "mascot_stand.png")
    
    if os.path.exists(mascot_path):
        try:
            mascot_img = Image.open(mascot_path).convert("RGBA")
            # Resize mascot to fit right side
            mascot_img.thumbnail((380, 480))
            # Paste on right side
            img.paste(mascot_img, (760, 75), mascot_img)
        except Exception as e:
            print("Error overlaying mascot:", e)
            
    if os.path.exists(logo_path):
        try:
            logo_img = Image.open(logo_path).convert("RGBA")
            logo_img.thumbnail((160, 90))
            img.paste(logo_img, (980, 490), logo_img)
        except Exception as e:
            print("Error overlaying logo:", e)
            
    out_path = os.path.join("public", "images", "og-image.png")
    img.save(out_path, "PNG")
    print(f"Generated {out_path} successfully ({width}x{height})")

if __name__ == "__main__":
    generate_og_image()
