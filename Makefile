name = ruleof3s

zip: $(name).zip

$(name).zip: $(name)/*
	zip -r $(name).zip $(name)