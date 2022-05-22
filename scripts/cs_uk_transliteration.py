# Didn't find a definite source on cs (Czech) and uk (Ukranian) transliteration
# Used sources:
# - https://cs.wikipedia.org/wiki/Ukrajinsk%C3%A1_cyrilice
# - https://www.zaedno.org/pdf/pracovni-listy/ukrajina/Ukrajina-pro-deti.pdf
# - https://www.lib.cas.cz/space.40/CYRILLIC/UKR.HTM


# TODO: turn this into a package

import re
from collections import Counter

UK_TO_CS_UPPER = {
    # Standard:
    "А": "A",
    "Б": "B",
    "В": "V",
    "Г": "H",
    "Ґ": "G",
    "Д": "D",
    "Е": "E",
    "Є": "Je",
    "Ж": "Ž",
    "З": "Z",
    "И": "Y",
    "І": "I",
    "Ї": "Ji",
    "Й": "J",
    "К": "K",
    "Л": "L",
    "М": "M",
    "Н": "N",
    "О": "O",
    "П": "P",
    "Р": "R",
    "С": "S",
    "Т": "T",
    "У": "U",
    "Ф": "F",
    "Х": "Ch",
    "Ц": "C",
    "Ч": "Č",
    "Ш": "Š",
    "Щ": "Šč",
    "Ю": "Ju",
    "Я": "Ja",
    "Ь": "'",
    # Two-letter characters from reverse mapping, source:
    # - https://www.zaedno.org/pdf/pracovni-listy/ukrajina/Ukrajina-pro-deti.pdf
    "ДЬ": "Ď",
    "НЬ": "Ň",
    "РЖ": "Ř",
    "ТЬ": "Ť",
    "КС": "X",
    # And again, but with the second character lowercased to cover both cases:
    "Дь": "Ď",
    "Нь": "Ň",
    "Рж": "Ř",
    "Ть": "Ť",
    "Кс": "X",
    # Similarly, let's borrow the soft L from Slovakian to avoid displaying the apostrophe (or whatever it is):
    # - https://cs.wikipedia.org/wiki/%C4%BD
    "ЛЬ": "Ľ",
    "Ль": "Ľ",

}

UK_TO_CS_SPECIAL = {
    # Not sure if necessary, source:  https://www.lib.cas.cz/space.40/CYRILLIC/UKR.HTM
    # "'": "`",
}

UK_TO_CS = {k.lower(): v.lower() for k, v in UK_TO_CS_UPPER.items()} | UK_TO_CS_UPPER | UK_TO_CS_SPECIAL

CS_TO_UK_UPPER = {
    # Standard cs alphabet
    "A": "А",
    "Á": "А",
    "B": "Б",
    "C": "Ц",
    "Č": "Ч",
    "D": "Д",
    # TODO: should the second letter be uppercase or lowercase?
    "Ď": "Дь",
    "E": "Е",
    "É": "Е",
    "Ě": "Є",
    "F": "Ф",
    "G": "Ґ",
    "H": "Г",
    "Ch": "Х",
    "CH": "Х",
    "I": "І",
    "Í": "І",
    "J": "Й",
    "K": "К",
    "L": "Л",
    "M": "М",
    "N": "Н",
    # TODO: should the second letter be uppercase or lowercase?
    "Ň": "Нь",
    "O": "О",
    "Ó": "О",
    "P": "П",
    # TODO: should the second letter be uppercase or lowercase?
    "Q": "Кв",
    "R": "Р",
    # TODO: should the second letter be uppercase or lowercase?
    "Ř": "Рж",
    "S": "С",
    "Š": "Ш",
    "T": "Т",
    # TODO: should the second letter be uppercase or lowercase?
    "Ť": "Ть",
    "U": "У",
    "Ú": "У",
    "Ů": "У",
    "V": "В",
    # TODO: W is identical to V, is that correct?
    "W": "В",
    # TODO: should the second letter be uppercase or lowercase?
    "X": "Кс",
    "Y": "И",
    "Ý": "И",
    "Z": "З",
    "Ž": "Ж",
    # Double-character reverse uk mappings:
    "Je": "Є",
    "JE": "Є",
    "Ji": "Ї",
    "JI": "Ї",
    "Šč": "Щ",
    "ŠČ": "Щ",
    "Ju": "Ю",
    "JU": "Ю",
    "Ja": "Я",
    "JA": "Я",
}


def test_uppercase_keys():
    for k in UK_TO_CS_UPPER:
        # we know that "Ch" and other two-letter keys are only partially uppercase on purpose
        if len(k) == 2:
            k = k[0]
        if k.upper() != k:
            raise ValueError(f'{k} is not upper: {k.upper()}')

    for k in CS_TO_UK_UPPER:
        # we know that "Ch" and other two-letter keys are only partially uppercase on purpose
        if len(k) == 2:
            k = k[0]
        if k.upper() != k:
            raise ValueError(f'{k} is not upper: {k.upper()}')


test_uppercase_keys()

CS_TO_UK = {k.lower(): v.lower() for k, v in CS_TO_UK_UPPER.items()} | CS_TO_UK_UPPER

print(Counter(map(len, CS_TO_UK.keys())))
print(Counter(map(len, UK_TO_CS.keys())))

# Check that len(weird_unicode_string) works as expected
print({k: v for k, v in UK_TO_CS.items() if len(k) > 1})
print({k: v for k, v in CS_TO_UK.items() if len(k) > 1})


def replacement_dict_to_regex(d: dict[str, str]) -> re.Pattern:
    # https://gist.github.com/bgusach/a967e0587d6e01e889fd1d776c5f3729

    # TODO: verify that sorting works and first matches longer expressions
    d_sorted = sorted(d, key=len, reverse=True)
    d_escaped = map(re.escape, d_sorted)

    return re.compile("|".join(d_escaped), flags=0)


CS_TO_UK_REGEX = replacement_dict_to_regex(CS_TO_UK)
UK_TO_CS_REGEX = replacement_dict_to_regex(UK_TO_CS)


def cs_to_uk(text):
    return CS_TO_UK_REGEX.sub(lambda match: CS_TO_UK[match.group(0)], text)


def uk_to_cs(text):
    return UK_TO_CS_REGEX.sub(lambda match: UK_TO_CS[match.group(0)], text)


# Czech pangram:
cs_test = "Příliš žluťoučký kůň v Chuchli úpěl ďábelské ódy."
print(cs_test)

cs_test_into_uk = cs_to_uk(cs_test)
print(cs_test_into_uk)
# Пржіліш жлутьоучки кунь в Хухлі упєл дьабелске оди.

cs_test_into_uk_back_into_cs = uk_to_cs(cs_test_into_uk)
print(cs_test_into_uk_back_into_cs)

# We can't assert for equality here, as cs → uk → cs is missing (at least):
# - čárky (a vs á, e vs é, etc.), kroužek (u vs ů)
# - ě (pěl → pjel)
# assert cs_test == cs_test_into_uk_back_into_cs


# Ukranian pangram:
# https://www.quora.com/What-is-a-sentence-in-Ukrainian-that-uses-every-letter-of-the-alphabet
uk_test = "Єхидна, ґава, їжак ще й шиплячі плазуни бігцем форсують Янцзи."
print(uk_test)

uk_test_into_cs = uk_to_cs(uk_test)
print(uk_test_into_cs)
# "Jechydna, gava, jižak šče j šypljači plazuny bihcem forsujuť Janczy."

uk_test_into_cs_back_into_uk = cs_to_uk(uk_test_into_cs)
print(uk_test_into_cs_back_into_uk)
# "Єхидна, ґава, їжак ще й шиплячі плазуни бігцем форсують Янцзи."

assert uk_test == uk_test_into_cs_back_into_uk
