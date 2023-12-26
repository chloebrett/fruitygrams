package com.chloebrett.fruitygrams

import com.google.common.collect.HashMultiset
import com.google.common.collect.Multiset

private val letterFrequencies: Map<Int, Set<Char>> = mapOf(
    18 to setOf('E'),
    13 to setOf('A'),
    12 to setOf('I'),
    11 to setOf('O'),
    9 to setOf('T', 'R'),
    8 to setOf('N'),
    6 to setOf('D', 'S', 'U'),
    5 to setOf('L'),
    4 to setOf('G'),
    3 to setOf('B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'),
    2 to setOf('J', 'K', 'Q', 'X', 'Z'),
)

private val flattenedFrequencies: List<Char> = run {
    val flattenedChars: MutableList<Char> = mutableListOf()
    letterFrequencies.entries.forEach { entry ->
        val freq = entry.key
        val chars = entry.value

        chars.forEach { char ->
            repeat(freq) {
                flattenedChars.add(char)
            }
        }
    }
    flattenedChars
}

class LetterBag {
    private val bagContents: MutableList<Char> = flattenedFrequencies.toMutableList().also { it.shuffle() }

    fun pullLetters(count: Int): String {
        var letters: String = ""
        repeat(count) {
            val letter = pullLetter()
            if (letter != null) {
                letters += letter
            }
        }
        return letters
    }

    fun putLetter(letter: Char) {
        bagContents.add(letter)
        bagContents.shuffle()
    }

    private fun pullLetter(): Char? = bagContents.removeFirstOrNull()
}
