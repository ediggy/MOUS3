'''Import an input file and display a simple graph'''


key_word = "invalid"
#Open File
with open('./input_files/test3.txt') as file:
    #Setup Dataframe
    meta_data = file.readline().strip().split(',')
    
    no_var = int(meta_data[0])
    no_timestep = int(meta_data[1])

    var_names = file.readline().strip().split(',')
    var_names.append("G")
 

    # Add Number of time steps to columns
    columns = ['variable']
    for i in range(no_timestep):
        columns.append(i)
    # print(columns)

    data = {} 

    for i in range(len(var_names)):
        data[i] = []
    
    data[len(var_names)-1] =[] 
    fail_no = []
    for line in file:
        #save the outputs
        if key_word in line:
            fail_no.append(int(line.strip().split(' ')[-1]))
            # print(fail_no)

        if ':' in line:
            com_sep = line.strip().split(',')
            bool = com_sep[-1]
            var_data = com_sep[0].split(':')

            var = int(var_data[0])
            time = int(var_data[1])

            data[var].append(bool)

# print(data)
space = " "
print(f"{space:3s}", end=" ")
for i in range(len(data[0])):
    print(f"{str(i):3s}", end=" ")

print()
count = 0
var = 0
for x in data:
    print(f"{var_names[var]:3s}", end=" ")
    for y in data[x]:
        if count in fail_no:
            print(f"\033[31m{y:3s}\033[0m", end=" ")
        else:
            print(f"{y:3s}", end=" ")
        count += 1
    print()
    count = 0
    var += 1
    



# df = pd.DataFrame.from_dict(data)         
# # print(df)
# df.to_csv('./output_files/test1.csv', encoding='utf-8')