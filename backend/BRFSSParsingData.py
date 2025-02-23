import numpy as np
import pandas as pd
from pandas import DataFrame

# Replace with your file path
file_path = 'LLCP2023.ASC'

# Read space-separated or tab-separated .asc file
def read_llcp_data(file_path):
    with open(file_path, 'r') as file:
        # Read all lines from the file
        data = file.readlines()
    
    parsed_data = []
    
    # Iterate over each line in the file
    for line in data:
        # Remove leading/trailing whitespaces and split by spaces
        split_line = line.split()
        
        # Append the parsed line to the list
        parsed_data.append(split_line)
    
    # Convert the parsed data into a pandas DataFrame
    df = pd.DataFrame(parsed_data)
    return df

# Call the function to read and parse the file
df = read_llcp_data(file_path)

# Filter the rows where the value in the first column is '13' (i.e., Georgia)
filtered_df = df[df[0] == '13']
print(filtered_df.columns)


# Filter for only rows where Column 1409 == 1 (In Atlanta)
atlanta_df = filtered_df[filtered_df[1409] == '1']

# Diabetes Data Tally: (Col 149: Yes == 1, No == 3)
diabetes_data = atlanta_df[atlanta_df[149].isin(['1', '3'])]
diabetes_tally = diabetes_data[149].value_counts()

# Age Life Satisfaction Tally: (Col 613: 1 = VSat, 2 = Sat, 3 = Diss, 4 = Very, DEL Blank)
life_satisfaction_data = atlanta_df[atlanta_df[613].isin(['1', '2', '3', '4'])]
life_satisfaction_tally = life_satisfaction_data[613].value_counts()

# Live with anyone depressed, mentally ill, or suicidal: (Col 591: 1 = Yes, 2 = No, 7 = Not Sure, 9 = Refused, BLANK = Miss)
mental_health_data = atlanta_df[atlanta_df[591].isin(['1', '2', '7', '9'])]
mental_health_tally = mental_health_data[591].value_counts()

# Output the results
print("Diabetes Data Tally (Yes=1, No=3):")
print(diabetes_tally)
print("\nLife Satisfaction Tally (1=VSat, 2=Sat, 3=Diss, 4=Very):")
print(life_satisfaction_tally)
print("\nMental Health Tally (Yes=1, No=2, Not Sure=7, Refused=9):")
print(mental_health_tally)


