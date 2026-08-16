from pydantic import BaseModel
from typing import List


class ExperienceUpdate(BaseModel):
    email: str
    experience_tools: List[str]
    model_approaches: List[str]