import re

# Read the file
with open(r'e:\swk - Copy\src\data\kridas.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Apply multiple passes to remove ALL excessive indentation
# Pass 1: Remove any leading spaces (4+) before * (bullet points)
content = re.sub(r'^[ ]{4,}\*', '*', content, flags=re.MULTILINE)

# Pass 2: Remove any leading spaces (4+) before numbers (numbered lists)  
content = re.sub(r'^[ ]{4,}([0-9])', r'\1', content, flags=re.MULTILINE)

# Pass 3: Remove any leading spaces (4+) before ( (parenthesized items)
content = re.sub(r'^[ ]{4,}\(', '(', content, flags=re.MULTILINE)

# Pass 4: Remove any leading spaces (4+) before - (dash lists)
content = re.sub(r'^[ ]{4,}-', '-', content, flags=re.MULTILINE)

# Write back to file
with open(r'e:\swk - Copy\src\data\kridas.jsx', 'w', encoding='utf-8', newline='') as f:
    f.write(content)

print("Successfully removed all excessive indentation")
