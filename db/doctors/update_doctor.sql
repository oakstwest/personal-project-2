update doctors
set 
doctor_name=$1,
email=$2,
phone=$3
where doctor_id = $4
