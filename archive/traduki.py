from translate import Translator

# Set up the translator from English to Esperanto
translator = Translator(to_lang="eo")

def translate_and_append(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    with open(output_file, 'w', encoding='utf-8') as file:
        for line in lines:
            # Split by colon to separate Thai and English words
            parts = line.strip().split(':')
            if len(parts) != 2:
                continue
            
            thai_word = parts[0].strip()
            english_word = parts[1].strip()
            
            # Translate English word to Esperanto
            esperanto_word = translator.translate(english_word)
            print(esperanto_word)
            # Write the line with Thai, English, and Esperanto words
            file.write(f"{thai_word} : {english_word} : {esperanto_word}\n")

# Example usage:
input_file = 'output.txt'  # Input file path
output_file = 'eo.txt'  # Output file path
translate_and_append(input_file, output_file)
