class Tracker:
    """
    Простейший трекер по IoU для присвоения уникального ID.
    """
    def __init__(self, iou_threshold=0.3):
        self.next_id = 1
        self.objects = {}  # {obj_id: bbox}
        self.iou_threshold = iou_threshold

    def iou(self, boxA, boxB):
        xA = max(boxA[0], boxB[0])
        yA = max(boxA[1], boxB[1])
        xB = min(boxA[0]+boxA[2], boxB[0]+boxB[2])
        yB = min(boxA[1]+boxA[3], boxB[1]+boxB[3])

        interArea = max(0, xB - xA) * max(0, yB - yA)
        boxAArea = boxA[2]*boxA[3]
        boxBArea = boxB[2]*boxB[3]
        return interArea / float(boxAArea + boxBArea - interArea)

    def assign_id(self, detected_object):
        for obj_id, bbox in self.objects.items():
            if self.iou(bbox, detected_object['bbox']) > self.iou_threshold:
                self.objects[obj_id] = detected_object['bbox']
                return obj_id
        # Новый объект
        obj_id = f"OBJ{self.next_id:04d}"
        self.objects[obj_id] = detected_object['bbox']
        self.next_id += 1
        return obj_id
