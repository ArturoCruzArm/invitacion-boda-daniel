#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar el array de fotos para selector.js
"""
import os
from pathlib import Path

def generate_photos_array():
    """Genera el código JavaScript con todas las fotos"""

    # Directorio de imágenes
    imagenes_dir = Path("imagenes")

    if not imagenes_dir.exists():
        print(f"Error: El directorio {imagenes_dir} no existe")
        return False

    # Buscar todos los archivos webp
    photos = sorted(imagenes_dir.glob("*.webp"))

    if not photos:
        print("No se encontraron fotos WebP")
        return False

    # Crear el array JavaScript
    js_array = "const photos = [\n"
    for i, photo in enumerate(photos):
        if i < len(photos) - 1:
            js_array += f"    'imagenes/{photo.name}',\n"
        else:
            js_array += f"    'imagenes/{photo.name}'\n"
    js_array += "];"

    print(f"[OK] Array generado con {len(photos)} fotos")
    print(f"\nPrimeras 5 fotos:")
    for i, photo in enumerate(photos[:5]):
        print(f"  {i+1}. {photo.name}")

    # Guardar en un archivo temporal
    output_file = "photos_array.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_array)

    print(f"\n[OK] Array guardado en: {output_file}")
    print(f"  Total de fotos: {len(photos)}")
    print(f"\nAhora actualiza js/selector.js reemplazando el array 'const photos = [...]'")

    return True

if __name__ == "__main__":
    generate_photos_array()
