import csv 
import requests
import json
INPUT_FILE = 'input/input.csv'
OUTPUT_FILE = 'output/output.csv'
AMAZON_API = 'https://track.amazon.in/api/tracker/'


def get_amazon_link(link):
    full_link = AMAZON_API + link
    r = requests.get(full_link)
    result = r.json()
    tracker = json.loads(result['progressTracker'])
    status = tracker['summary']['status']
    return status

input_f = open(INPUT_FILE)
reader = csv.DictReader(input_f)
links = []
for row in reader:
    links.append(row['Tracking ID'])

print(links)
output_f = open(OUTPUT_FILE, 'w')
csv_output = csv.writer(output_f)

for link in links:
    status = get_amazon_link(link)
    print("Processed ",link, " ", status)
    csv_output.writerow([link,status])

output_f.close()
