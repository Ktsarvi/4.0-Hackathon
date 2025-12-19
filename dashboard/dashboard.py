from modules.database import Database

db = Database()
records = db.fetch_objects()

unique_ids = set(r[1] for r in records)  # уникальные объекты по ID

ok_count = sum(1 for r in records if r[2] == 'OK')
defect_count = sum(1 for r in records if r[2] == 'DEFECT')

print(f"Total unique objects: {len(unique_ids)}")
print(f"OK: {ok_count}, DEFECT: {defect_count}")
