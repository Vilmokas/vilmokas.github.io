import json
from jinja2 import Environment, FileSystemLoader

datafile = "source/data.json"
templatefile = "source/index.template.html"
outputfile = "public/index.html"

# Load JSON data
print("loading json data file...")
with open(datafile) as f:
    data = json.load(f)

# Load Jinja2 template
print("loading html template file...")
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template(templatefile)

# Render template with data
print("rendering template with data...")
rendered_html = template.render(data)

# Write to output file
print("Writing to output file...")
with open(outputfile, 'w', encoding='utf-8') as f:
    f.write(rendered_html)

print("✅ HTML file generated: " + outputfile)
