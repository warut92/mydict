import json

# Step 1: Read JSON data from a .txt file with UTF-8 encoding
with open('data.js', 'r', encoding='utf-8') as file:
    json_data = file.read()
print(json_data)
# Step 2: Parse the JSON data into a Python list (since it's an array of JSON objects)
data = json.loads(f"[{json_data}]")  # If the content is not enclosed in a list, you can do this.

# Step 3: Prepare a list to hold the output
output_lines = []

# Step 4: Extract specific properties from each JSON object
for item in data:
    tsearch = item.get('tsearch', '')
    eentry = item.get('eentry', '')

    # Format the extracted data into a string
    output_lines.append(f"{tsearch} : {eentry}")

# Step 5: Join the lines with a separator (e.g., a newline) and write to a new .txt file
with open('output.txt', 'w', encoding='utf-8') as output_file:
    output_file.write('\n'.join(output_lines))

print("Extracted properties have been saved to 'output.txt'")
